#!/usr/bin/env node
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import { createMcpServer, skills } from './tools.js';
import http from 'http';

async function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', (chunk) => {
      data += chunk;
    });
    req.on('end', () => {
      try {
        resolve(data ? JSON.parse(data) : undefined);
      } catch (error) {
        reject(error);
      }
    });
    req.on('error', reject);
  });
}

const httpServer = http.createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept, Mcp-Session-Id');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const { pathname } = new URL(req.url, 'http://localhost');
  const isMcpEndpoint = pathname === '/' || pathname === '/mcp';

  if (isMcpEndpoint && req.method === 'GET' && pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify({
        name: 'javafx-skills',
        version: '1.0.0',
        skills: skills.length,
        endpoints: {
          mcp: '/mcp',
          root: '/'
        }
      })
    );
    return;
  }

  if (isMcpEndpoint && (req.method === 'POST' || req.method === 'GET' || req.method === 'DELETE')) {
    try {
      const body = req.method === 'POST' ? await readBody(req) : undefined;
      const transport = new StreamableHTTPServerTransport({ sessionIdGenerator: undefined });
      const server = createMcpServer();
      await server.connect(transport);
      await transport.handleRequest(req, res, body);
    } catch (error) {
      if (!res.headersSent) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: String(error) }));
      }
    }
    return;
  }

  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Not found' }));
});

const port = process.env.PORT || 3000;
httpServer.listen(port, () => {
  process.stderr.write(`JavaFX Skills MCP server listening on port ${port}\n`);
});

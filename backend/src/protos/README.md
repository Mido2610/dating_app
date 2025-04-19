# Protocol Buffers Implementation

This directory contains the Protocol Buffers implementation for the dating app backend. Protocol Buffers provides a structured way to serialize data between the frontend and backend.

## Directory Structure

- `user.proto` - The proto definition file that defines the message formats
- `generated/` - Contains generated JavaScript and TypeScript files from proto definitions
- `proto-utils.ts` - Utility functions for working with Protocol Buffers
- `client-example.ts` - Examples of how to use Protocol Buffers from a client

## Using Protocol Buffers

### Sending Requests

When sending requests to the API, you can use either JSON or Protocol Buffers:

#### Using Protocol Buffers

```typescript
// Create a proto message
const request = new proto.user.SendOtpRequest();
request.phone = "+84123456789";

// Serialize to binary
const binary = proto.user.SendOtpRequest.encode(request).finish();

// Send request
const response = await fetch('/api/otp/send-otp', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/protobuf',
    'Accept': 'application/protobuf'
  },
  body: binary
});

// Parse the binary response
const buffer = await response.arrayBuffer();
const responseProto = proto.user.SendOtpResponse.decode(new Uint8Array(buffer));
```

#### Using JSON (Backward Compatible)

```typescript
const response = await fetch('/api/otp/send-otp', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ phone: "+84123456789" })
});

const data = await response.json();
```

## Regenerating Protocol Buffer Files

If you make changes to the proto definition, you need to regenerate the TypeScript files:

```bash
npm run generate-proto
```

## Adding New Messages

1. Add your new message definitions to `user.proto`
2. Regenerate the TypeScript files with `npm run generate-proto`
3. Add converter methods to `proto-utils.ts` if needed
4. Update your controllers to use the new message types 
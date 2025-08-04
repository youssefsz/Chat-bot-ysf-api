# Chat API Documentation

A comprehensive guide for developers to integrate with the Production Chat API Backend.

## Base URL

```
https://python-test-server-uld3.onrender.com
```

## Authentication

This API uses Mistral AI for chat completions. No additional authentication is required from the client side as the API key is managed server-side.

## Endpoints

### 1. Health Check

**GET** `/health`

Check if the API is running and healthy.

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2025-01-27T10:30:00",
  "environment": "production",
  "version": "1.0.0"
}
```

### 2. API Information

**GET** `/`

Get basic information about the API and available endpoints.

**Response:**
```json
{
  "message": "Production Chat API Backend",
  "version": "1.0.0",
  "environment": "production",
  "endpoints": {
    "health": "/health",
    "chat_completions": "/chat/completions",
    "simple_chat": "/chat/simple"
  }
}
```

### 3. Chat Completions (Full API)

**POST** `/chat/completions`

OpenAI-compatible chat completions endpoint with full control over conversation flow.

**Request Body:**
```json
{
  "messages": [
    {
      "role": "system",
      "content": "You are a helpful assistant."
    },
    {
      "role": "user",
      "content": "Hello, how are you?"
    }
  ],
  "system_prompt": "You are a helpful assistant specialized in technical support.",
  "max_tokens": 1000,
  "temperature": 0.7,
  "stream": false
}
```

**Parameters:**
- `messages` (required): Array of message objects with `role` and `content`
- `system_prompt` (optional): Custom system prompt to override default behavior
- `max_tokens` (optional): Maximum tokens to generate (1-4000, default: 1000)
- `temperature` (optional): Response creativity (0.0-2.0, default: 0.7)
- `stream` (optional): Whether to stream response (default: false)

**Message Roles:**
- `system`: Sets the behavior and context for the assistant
- `user`: Messages from the user
- `assistant`: Previous responses from the AI

**Response:**
```json
{
  "id": "chatcmpl-123",
  "object": "chat.completion",
  "created": 1677652288,
  "model": "mistral-tiny",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "Hello! I'm doing well, thank you for asking. How can I help you today?"
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 20,
    "completion_tokens": 15,
    "total_tokens": 35
  }
}
```

### 4. Simple Chat

**POST** `/chat/simple`

Simplified endpoint for quick single-message interactions.

**Request Body:**
```json
{
  "message": "What is the weather like today?",
  "system_prompt": "You are a weather assistant."
}
```

**Parameters:**
- `message` (required): The user's message
- `system_prompt` (optional): Custom system prompt (default: "You are a helpful assistant.")

**Response:**
```json
{
  "response": "I don't have access to real-time weather data. Please check a weather service like weather.com or your local weather app for current conditions."
}
```

## System Prompts

System prompts define the AI's behavior and personality. Here are some examples:

### Customer Support
```json
{
  "system_prompt": "You are a professional customer support representative. Be helpful, patient, and always try to solve the customer's problem. If you can't help, escalate to a human agent."
}
```

### Technical Assistant
```json
{
  "system_prompt": "You are a senior software engineer. Provide accurate, detailed technical explanations. Include code examples when relevant and always consider best practices."
}
```

### Creative Writer
```json
{
  "system_prompt": "You are a creative writing assistant. Help users with storytelling, character development, and creative ideas. Be imaginative and inspiring."
}
```

### Educational Tutor
```json
{
  "system_prompt": "You are a patient tutor. Explain concepts clearly, use examples, and encourage learning. Adapt your explanations to the student's level."
}
```

## Code Examples

### JavaScript/Node.js

```javascript
// Simple chat example
async function sendMessage(message, systemPrompt = null) {
  const response = await fetch('https://python-test-server-uld3.onrender.com/chat/simple', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: message,
      system_prompt: systemPrompt
    })
  });
  
  const data = await response.json();
  return data.response;
}

// Full chat completions example
async function chatCompletion(messages, options = {}) {
  const response = await fetch('https://python-test-server-uld3.onrender.com/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      messages: messages,
      system_prompt: options.systemPrompt,
      max_tokens: options.maxTokens || 1000,
      temperature: options.temperature || 0.7
    })
  });
  
  return await response.json();
}
```

### Python

```python
import requests
import json

def send_simple_message(message, system_prompt=None):
    url = "https://python-test-server-uld3.onrender.com/chat/simple"
    payload = {
        "message": message,
        "system_prompt": system_prompt
    }
    
    response = requests.post(url, json=payload)
    return response.json()["response"]

def chat_completion(messages, system_prompt=None, max_tokens=1000, temperature=0.7):
    url = "https://python-test-server-uld3.onrender.com/chat/completions"
    payload = {
        "messages": messages,
        "system_prompt": system_prompt,
        "max_tokens": max_tokens,
        "temperature": temperature
    }
    
    response = requests.post(url, json=payload)
    return response.json()
```

### cURL

```bash
# Simple chat
curl -X POST "https://python-test-server-uld3.onrender.com/chat/simple" \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Hello, how are you?",
    "system_prompt": "You are a friendly assistant."
  }'

# Chat completions
curl -X POST "https://python-test-server-uld3.onrender.com/chat/completions" \
  -H "Content-Type: application/json" \
  -d '{
    "messages": [
      {"role": "system", "content": "You are a helpful assistant."},
      {"role": "user", "content": "What is the capital of France?"}
    ],
    "max_tokens": 100,
    "temperature": 0.7
  }'
```

## Error Handling

The API returns standard HTTP status codes:

- `200`: Success
- `400`: Bad Request (invalid parameters)
- `500`: Internal Server Error

**Error Response Format:**
```json
{
  "error": "Validation Error",
  "detail": "Invalid temperature value. Must be between 0.0 and 2.0",
  "timestamp": "2025-01-27T10:30:00"
}
```

## Rate Limiting

Currently, there are no rate limits implemented, but it's recommended to:
- Implement client-side rate limiting
- Cache responses when appropriate
- Use reasonable token limits to control costs

## Best Practices

### 1. System Prompt Design
- Be specific about the AI's role and behavior
- Include examples of desired responses
- Set clear boundaries and limitations
- Test different prompts to find what works best

### 2. Conversation Management
- Keep conversation history relevant and concise
- Remove old messages to stay within token limits
- Use the `system_prompt` parameter to maintain context

### 3. Error Handling
- Always check response status codes
- Implement retry logic for temporary failures
- Provide fallback responses for users

### 4. Performance
- Use appropriate `max_tokens` values
- Adjust `temperature` based on use case
- Consider caching for repeated queries

## Support

For technical issues or questions:
1. Check the `/health` endpoint to verify API status
2. Review error messages for specific issues
3. Ensure all required parameters are provided
4. Verify JSON formatting in requests

## Changelog

### Version 1.0.0
- Initial release
- Chat completions endpoint
- Simple chat endpoint
- Health check endpoint
- System prompt support
- OpenAI-compatible responses

---
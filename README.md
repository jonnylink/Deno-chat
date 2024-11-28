# Chat Wrapper
A super simple deno server wrapper for OpenAI's ChatGPT and Anthropic's Claude APIs for Fun™

By Default ChatGPT is used.

## Setup
1. Clone the repository.
2. Run `deno install`.
3. Create a `.env` file by copying the `.env.example` file and updating the values.
4. Run `deno task start`

## Requirements
1. ChatGPT API key
1. Anthropic API key (if using the Anthropic client)
2. Weather.com API key (if using the /what-to-wear route)

## Routes
To use Anthropic's Claude, add a query param ?client=anthropic

### health
To see if the server is running as expected:
Send a GET request to `/health`

### Generic chat
To write open-ended prompts:
Send a POST request to `/chat` with a JSON body:
```json
{"message": "Tell me a funny joke."}
```

### What to wear
To get advice on what to wear today:
Send a GET request to `/what-to-wear?zip=YOUR-ZIP-CODE`

### Zen koan
To get a zen koan:
Send a GET request to `/koan`

### Magical realism
To read a short piece of sort of ok magical realism:
Send a GET request to `/magic`

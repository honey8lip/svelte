# Svelte

> Cybernetically enhanced web apps

This is a fork of [sveltejs/svelte](https://github.com/sveltejs/svelte), maintained for experimental features and performance investigations.

## What is Svelte?

Svelte is a tool for building fast web applications. It is similar to JavaScript frameworks such as React and Vue, which share a goal of making it easy to build slick interactive user interfaces.

But there's a crucial difference: Svelte converts your app into ideal JavaScript at *build time*, rather than interpreting your application code at *run time*. This means you don't pay the performance cost of the framework's abstractions, and you don't incur a penalty when your app first loads.

You can learn more about Svelte at the [official documentation](https://svelte.dev/docs).

## Fork Differences

This fork includes:
- Performance investigation tooling (see `.agents/skills/performance-investigation/`)
- Experimental compiler optimizations
- Additional changeset workflows

## Getting Started

### Prerequisites

- Node.js >= 16
- pnpm >= 8

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/svelte.git
cd svelte

# Install dependencies
pnpm install
```

### Building

```bash
# Build all packages
pnpm build

# Build in watch mode
pnpm dev
```

### Testing

```bash
# Run all tests
pnpm test

# Run tests for a specific package
pnpm test --filter=svelte

# Run tests in watch mode
pnpm test:watch
```

## Repository Structure

```
svelte/
├── packages/
│   ├── svelte/          # Core Svelte compiler and runtime
│   └── svelte-check/    # Type checking tool
├── sites/
│   └── svelte.dev/      # Documentation site
├── .agents/
│   └── skills/          # Agent skill definitions
└── .changeset/          # Changesets for versioning
```

## Contributing

Please read the [contributing guide](CONTRIBUTING.md) before submitting pull requests.

### Creating a Changeset

When making changes that should be released, create a changeset:

```bash
pnpm changeset
```

Follow the prompts to describe your changes.

## License

[MIT](LICENSE)

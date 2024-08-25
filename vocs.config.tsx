import * as React from 'react'
import { defineConfig } from 'vocs'

export default defineConfig({
  logoUrl: {
    dark: '/logo-white.svg',
    light: '/logo-black.svg'
  },
  ogImageUrl: {
    '/': 'https://vocs-og-rouge.vercel.app/api/og?title=%title&description=%description',
  },
  editLink: {
    pattern: 'https://github.com/zerodevapp/docs/edit/main/docs/pages/:path',
    text: 'Edit on GitHub',
  },
  titleTemplate: '%s – ZeroDev',
  description: "Build amazing Web3 UX with ZeroDev's smart account platform.",
  head: (
    <>
      <meta property="og:type" content="website" />
      <meta property="og:title" content="ZeroDev -- Simple & Powerful Account Abstraction" />
      <meta property="og:url" content="https://zerodev.app" />
      <meta property="og:description" content="Build a Web3 experience that feels like Web2, using account abstraction through ZeroDev.  Say goodbye to gas, seed phrases, transaction prompts, and more." />
    </>
  ),
  topNav: [
    { text: 'SDK', link: '/', match: '/sdk' },
    // { text: 'Infra', link: '/meta-infra/intro', match: '/meta-infra' },
    // {
    //   link: 'https://dashboard.zerodev.app/',
    //   text: 'Dashboard',
    // },
    // { text: 'Blog', link: '/blog', match: '/blog' },
  ],
  socials: [
    {
      icon: 'github',
      link: 'https://github.com/zerodevapp',
    },
    {
      icon: "discord",
      link: "https://discord.gg/KS9MRaTSjx"
    },
    {
      icon: 'x',
      link: 'https://twitter.com/zerodev_app',
    }
  ],
  sidebar: {
    "/": [
      {
        "text": "Getting Started",
        "collapsed": false,
        "items": [
          {
            "text": "Introduction",
            "link": "/"
          },
          {
            "text": "Why chain abstraction",
            "link": "/sdk/why-chain-abstraction"
          },
          {
            "text": "Demo",
            "link": "https://github.com/zerodevapp/cab-demo"
          },
          {
            "text": "Get in touch",
            "link": "https://t.me/derek_chiang",
          },
          // {
          //   "text": "Quickstart",
          //   "link": "/sdk/quickstart"
          // },
        ],
      },
      {
        "text": "Setting up Magic Account",
        "collapsed": false,
        "items": [
          {
            "text": "Introduction",
            "link": "/sdk/setup"
          },
          {
            "text": "Social / email",
            "link": "/sdk/setup/social"
          },
          {
            "text": "Passkeys",
            "link": "/sdk/setup/passkeys"
          },
          {
            "text": "EOAs",
            "link": "/sdk/setup/eoa"
          },
          {
            "text": "Third-party signers",
            "link": "/sdk/setup/third-party-signers"
          },
        ],
      },
      {
        "text": "Using Magic Account",
        "collapsed": false,
        "items": [
          {
            "text": "Basic Usage",
            "link": "/sdk/usage"
          },
          {
            "text": "Chain abstraction",
            "link": "/sdk/usage/chain-abstraction"
          },
          {
            "text": "Sponsoring gas",
            "link": "/sdk/usage/sponsoring-gas"
          },
          {
            "text": "Paying gas with ERC20s",
            "link": "/sdk/usage/paying-gas-with-erc20"
          },
          {
            "text": "Batching transactions",
            "link": "/sdk/usage/batching-transactions"
          },
          {
            "text": "1-click trading",
            "link": "/sdk/usage/one-click-trading"
          },
          {
            "text": "Automating transactions",
            "link": "/sdk/usage/automating-transactions"
          },
        ],
      },
      // {
      //   "text": "Using Magic Account with other accounts",
      //   "collapsed": false,
      //   "items": [
      //     {
      //       "text": "Introduction",
      //       "link": "/sdk/interop"
      //     },
      //     {
      //       "text": "Kernel (ZeroDev)",
      //       "link": "/sdk/interop/kernel"
      //     },
      //     {
      //       "text": "Safe",
      //       "link": "/sdk/interop/safe"
      //     },
      //     {
      //       "text": "Biconomy",
      //       "link": "/sdk/interop/biconomy"
      //     },
      //     {
      //       "text": "Alchemy",
      //       "link": "/sdk/interop/alchemy"
      //     },
      //   ],
      // },
      {
        "text": "Knowledge Base",
        "collapsed": false,
        "items": [
          {
            "text": "What is a smart account?",
            "link": "/sdk/knowledge-base/smart-account"
          },
          {
            "text": "How does chain abstraction work?",
            "link": "/sdk/knowledge-base/chain-abstraction"
          },
          {
            "text": "What are capabilities (ERC-5792)?",
            "link": "/sdk/knowledge-base/capabilities"
          },
          {
            "text": "What are permissions (ERC-7715)?",
            "link": "/sdk/knowledge-base/permissions"
          },
        ],
      },
    ],
    "/wallet": [
      {
        "text": "Getting Started",
        "collapsed": false,
        "items": [
          {
            "text": "Introduction",
            "link": "/wallet"
          },
        ],
      },
    ],
    "/meta-infra": [
      {
        "text": "Getting Started",
        "collapsed": false,
        "items": [
          {
            "text": "Introduction",
            "link": "/meta-infra/intro"
          },
          {
            "text": "Gas Policies",
            "link": "/meta-infra/gas-policies"
          },
          {
            "text": "Custom Gas Policies",
            "link": "/meta-infra/custom-gas-policies"
          },
          {
            "text": "Bundler & Paymaster RPCs",
            "link": "/meta-infra/rpcs"
          },
          {
            "text": "Admin API",
            "link": "/meta-infra/api"
          }
        ],
      }
    ],
  },
})

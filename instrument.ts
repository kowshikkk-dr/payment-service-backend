import * as Sentry from "@sentry/node";
import { nodeProfilingIntegration } from "@sentry/profiling-node";

Sentry.init({
  dsn: "https://44508e49d4b60a6a52aa2e23b76c0f1f@o4510685742956544.ingest.de.sentry.io/4510685744726096",
  integrations: [nodeProfilingIntegration()],
  // Tracing
  tracesSampleRate: 1, //  Capture 100% of the transactions

  // Set sampling rate for profiling - this is relative to tracesSampleRate
  profilesSampleRate: 1,

  // Send structured logs to Sentry
  enableLogs: true,
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});

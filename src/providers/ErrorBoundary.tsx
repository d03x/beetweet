"use client";
import { ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";

function DefaultFallback({ error }: { error: Error }) {
  return (
    <div>
        <h1>{error.message}</h1>
        <p>{error.name}</p>
    </div>
  )
}
const ErrorBoundaryProvider = ({
  children,
  fallback,
}: {
  children: ReactNode;
  fallback?: never;
}) => {
  return (
    <ErrorBoundary FallbackComponent={fallback || DefaultFallback}>
      {children}
    </ErrorBoundary>
  );
};
export default ErrorBoundaryProvider;

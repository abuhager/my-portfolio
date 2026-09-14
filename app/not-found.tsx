import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <main className="not-found">
      <div>
        <p>404</p>
        <h1>This page is not part of the portfolio.</h1>
        <span>The main portfolio is still one click away.</span>
        <Button label="Return home" href="/" />
      </div>
    </main>
  );
}

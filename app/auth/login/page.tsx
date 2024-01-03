import SignInButton from '@/components/SignInButton';

async function LoginPage() {
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000'
    }/api/auth/providers`
  );

  if (!res.ok) throw new Error(`Providers Not Found.`);

  const providers: Provider[] = await res.json();

  console.log(providers);

  return (
    <div className="grid grid-cols-2 gap-3 mt-5">
      {Object.values(providers).map((provider) => (
        <SignInButton key={provider.id} provider={provider} />
      ))}
    </div>
  );
}

export default LoginPage;

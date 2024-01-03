import SignInButton from '@/components/SignInButton';
import { getFetchUrl } from '@/lib/utils';
import { CommonProviderOptions } from 'next-auth/providers';

async function LoginPage() {
  const res = await fetch(`${getFetchUrl()}/api/auth/providers`);
  const providers: CommonProviderOptions = await res.json();

  return (
    <div className="grid grid-cols-2 gap-3 mt-5">
      {Object.values(providers).map((provider) => (
        <SignInButton key={provider.id} provider={provider} />
      ))}
    </div>
  );
}

export default LoginPage;

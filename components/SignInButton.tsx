import { getFetchUrl } from '@/lib/utils';
import { Button } from './ui/button';
import { signIn } from '@/lib/auth';

function SignInButton({ provider }: { provider: Provider }) {
  console.log(process.env.VERCEL_ENV);
  return (
    <form>
      <Button
        formAction={async () => {
          'use server';
          await signIn(provider.id, {
            callbackUrl: `${getFetchUrl()}/api/auth/callback/${provider.id}`,
            redirectTo: '/',
          });
        }}
        className="border rounded-lg py-2 px-4 text-center"
      >
        Sign in with {provider.name}
      </Button>
    </form>
  );
}

export default SignInButton;

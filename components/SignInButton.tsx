import { Button } from './ui/button';
import { signIn } from '@/lib/auth';

function SignInButton({ provider }: { provider: Provider }) {
  return (
    <form>
      <Button
        formAction={async () => {
          'use server';
          await signIn(provider.id, {
            callbackUrl: provider.callbackUrl,
            redirectTo: '/',
          });
        }}
        key={provider.id}
        className="border rounded-lg py-2 px-4 text-center"
      >
        Sign in with {provider.name}
      </Button>
    </form>
  );
}

export default SignInButton;

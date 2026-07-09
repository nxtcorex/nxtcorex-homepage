import { getMessages } from "@/lib/i18n";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function EnglishNotFound() {
  const messages = await getMessages("en");

  return (
    <div className="container mx-auto px-4 py-16 pt-24">
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-neutral-900 dark:text-neutral-50">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-neutral-700 dark:text-neutral-300">
          Page Not Found
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-md">
          The page you are looking for does not exist or has been removed.
        </p>
        <Link href="/en">
          <Button size="lg">Go Home</Button>
        </Link>
      </div>
    </div>
  );
}
import { getMessages } from "@/lib/i18n";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function NotFound() {
  const messages = await getMessages("zh");

  return (
    <div className="container mx-auto px-4 py-16 pt-24">
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-neutral-900 dark:text-neutral-50">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-neutral-700 dark:text-neutral-300">
          页面未找到
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-md">
          您访问的页面不存在或已被移除。
        </p>
        <Link href="/">
          <Button size="lg">返回首页</Button>
        </Link>
      </div>
    </div>
  );
}
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container px-4 pt-16 pb-16 md:px-8">
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-bold tracking-tight md:text-8xl">404</h1>
        <h2 className="mt-6 text-2xl font-semibold tracking-tight md:text-3xl">
          页面未找到
        </h2>
        <p className="mt-3 mb-8 max-w-md text-muted-foreground">
          您访问的页面不存在或已被移除。
        </p>
        <Button asChild size="lg">
          <Link href="/">返回首页</Link>
        </Button>
      </div>
    </div>
  );
}

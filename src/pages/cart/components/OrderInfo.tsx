import { Button } from '@/components/ui/button';

export function OrderInfo() {
  return (
    <div className="h-32 sticky bottom-0 bg-white border-secondary rounded-t-xl shadow-[0_0_5px_0_rgba(0,0,0,0.16)]">
      <div className="h-full p-5 flex flex-col space-y-4">
        <div className="flex-1 flex items-center">
          <p className="text-sm">총 3건</p>
          <p className="ml-auto text-sm">
            주문 예상 금액: <span className="ml-2 text-xl font-semibold">135,000원</span>
          </p>
        </div>
        <div className="flex-1">
          <Button className="w-full" variant="secondary" size="sm">
            주문하기
          </Button>
        </div>
      </div>
    </div>
  );
}

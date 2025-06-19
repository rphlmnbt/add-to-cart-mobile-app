import { useState, useMemo } from 'react';

export default function useVoucher(total: number) {
  const [voucherCode, setVoucherCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const applyVoucher = () => {
    setDiscount(voucherCode.trim().toLowerCase() === 'discount10' ? 0.1 : 0);
  };

  const discountedTotal = useMemo(() => {
    return total - total * discount;
  }, [total, discount]);

  return { voucherCode, setVoucherCode, discount, discountedTotal, applyVoucher };
}
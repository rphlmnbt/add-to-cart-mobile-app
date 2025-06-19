import { useState, useMemo } from 'react';

export default function useVoucher(total) {
  const [voucherCode, setVoucherCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const applyVoucher = () => {
    setDiscount(voucherCode.toLowerCase().trim() === 'discount10' ? 0.1 : 0);
  };

  const discountedTotal = useMemo(() => total - total * discount, [total, discount]);

  return { voucherCode, setVoucherCode, discount, discountedTotal, applyVoucher };
}

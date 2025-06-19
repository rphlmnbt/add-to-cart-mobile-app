import { useState, useMemo } from 'react';

export default function useVoucher(total: number) {
  const [voucherCode, setVoucherCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [error, setError] = useState('');

  const applyVoucher = () => {
    const code = voucherCode.trim().toLowerCase();
    if (code === 'discount10') {
      setDiscount(0.1);
      setError('');
    } else {
      setDiscount(0);
      setError('Invalid voucher code.');
    }
  };

  const clearVoucher = () => {
    setVoucherCode('');
    setDiscount(0);
    setError('');
  };

  const discountedTotal = useMemo(() => {
    return total - total * discount;
  }, [total, discount]);

  return {
    voucherCode,
    setVoucherCode,
    discount,
    discountedTotal,
    applyVoucher,
    clearVoucher,
    error,
  };
}

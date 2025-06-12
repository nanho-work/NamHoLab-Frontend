import ProductionGuide from "@/components/Signup/productionGuide";
import SignupProgressGuide from '@/components/Signup/SignupProgressGuide';

export default function ProductionPage() {
  return (
    <div>
      <SignupProgressGuide />
      <ProductionGuide />
    </div>
  );
}
'use client';

import SignupAndInquiryForm from '@/components/Signup/SignupAndInquiryForm';
import SignupProgressGuide from '@/components/Signup/SignupProgressGuide';

export default function SignupPage() {
    return (
        <div className="min-h-screen">
            <SignupProgressGuide />
            <SignupAndInquiryForm />
        </div>
    );
}
'use client';

import { useState } from 'react';

export default function SignupInquiryConversationalForm() {
    const [formData, setFormData] = useState({
        company: '',
        name: '',
        email: '',
        phone: '',
        website: '',
        reference: '',
        budget: '',
        requirements: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        alert("제출 완료!");
    };

    return (
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-white via-blue-50 to-blue-100 p-10 rounded-3xl shadow-xl my-16 space-y-10 border border-blue-200">
            <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-10">
                홈페이지 제작 상담 신청
            </h2>

            <form onSubmit={handleSubmit} className="space-y-8 text-xl font-semibold text-gray-800">

                <div>
                    우리는
                    <input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="업체명"
                        required
                        className="mx-2 px-3 py-1 rounded-md border font-normal"
                    />입니다. 저는
                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="담당자명"
                        required
                        className="mx-2 px-3 py-1 rounded-md border font-normal"
                    />입니다.
                </div>

                <div>
                    연락처는
                    <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="연락처"
                        className="mx-2 px-3 py-1 rounded-md border font-normal"
                    />
                    이메일은
                    <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="이메일"
                        required
                        className="mx-2 px-3 py-1 rounded-md border font-normal"
                    /> 입니다.
                </div>

                <div>
                    현재 홈페이지는
                    <input
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder="현재 홈페이지 URL"
                        className="mx-2 px-3 py-1 rounded-md border font-normal"
                    /> 입니다.
                </div>

                <div>
                    이 홈페이지처럼
                    <input
                        name="reference"
                        value={formData.reference}
                        onChange={handleChange}
                        placeholder="참고사이트 URL"
                        className="mx-2 px-3 py-1 rounded-md border font-normal text-blue-600"
                    /> 만들고 싶어요!
                </div>

                <div>
                    예산은
                    <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="mx-2 px-3 py-1 rounded-md border font-normal"
                    >
                        <option value="">선택하세요</option>
                        <option value="500미만">500만원 미만</option>
                        <option value="500-1000">500~1000만원</option>
                        <option value="1000-2000">1000~2000만원</option>
                        <option value="2000이상">2000만원 이상</option>
                    </select> 입니다.
                </div>

                <div>
                    추가 요청사항이 있다면 작성해주세요:
                    <textarea
                        name="requirements"
                        value={formData.requirements}
                        onChange={handleChange}
                        placeholder="요청사항"
                        rows={4}
                        className="mt-2 w-full px-3 py-2 rounded-md border font-normal"
                    />
                </div>

                <button type="submit" className="w-full py-4 bg-blue-600 text-white rounded-lg text-xl hover:bg-blue-700 transition">
                    상담 신청하기
                </button>
            </form>
        </div>
    );
}
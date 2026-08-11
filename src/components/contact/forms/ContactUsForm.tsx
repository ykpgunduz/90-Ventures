"use client";
import { ContactUsFormValuesDt } from "@/types/contact-dt";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const WEB3FORMS_ACCESS_KEY = "5910d342-a628-4ed1-808a-a59faa9267bb";

const ContactUsForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactUsFormValuesDt>();

    const onSubmit = async (data: ContactUsFormValuesDt) => {
        setIsSubmitting(true);
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    name: data.name,
                    email: data.email,
                    website: data.website || "",
                    message: data.message,
                    subject: `Yeni İletişim Formu: ${data.name}`,
                    from_name: "+90 Ventures İletişim",
                    botcheck: "",
                }),
            });

            const result = await response.json();

            if (result.success) {
                toast.success("Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.");
                reset();
            } else {
                toast.error(result.message || "Mesaj gönderilemedi. Lütfen tekrar deneyin.");
            }
        } catch {
            toast.error("Bir hata oluştu. Lütfen internet bağlantınızı kontrol edip tekrar deneyin.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
            {/* Honeypot spam protection — invisible to users */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

            <div className="row">
                {/* Full Name */}
                <div className="col-lg-6">
                    <div className="tp-contact-form-input mb-20">
                        <label>Ad Soyad*</label>
                        <input
                            type="text"
                            {...register("name", {
                                required: "Ad Soyad zorunludur",
                                minLength: {
                                    value: 3,
                                    message: "Ad Soyad en az 3 karakter olmalıdır",
                                },
                            })}
                        />
                        {errors.name && (
                            <p className="form-error">{errors.name.message}</p>
                        )}
                    </div>
                </div>

                {/* Email */}
                <div className="col-lg-6">
                    <div className="tp-contact-form-input mb-20">
                        <label>E-posta Adresi*</label>
                        <input
                            type="email"
                            {...register("email", {
                                required: "E-posta adresi zorunludur",
                                pattern: {
                                    value:
                                        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                    message: "Geçerli bir e-posta adresi girin",
                                },
                            })}
                        />
                        {errors.email && (
                            <p className="form-error">{errors.email.message}</p>
                        )}
                    </div>
                </div>

                {/* Website */}
                <div className="col-lg-12">
                    <div className="tp-contact-form-input mb-20">
                        <label>Web Sitesi</label>
                        <input
                            type="text"
                            {...register("website", {
                                pattern: {
                                    value:
                                        /^(https?:\/\/)?([\w\d-]+\.)+\w{2,}(\/.*)?$/,
                                    message: "Geçerli bir web sitesi adresi girin",
                                },
                            })}
                        />
                        {errors.website && (
                            <p className="form-error">
                                {errors.website.message}
                            </p>
                        )}
                    </div>
                </div>

                {/* Message */}
                <div className="col-lg-12">
                    <div className="tp-contact-form-input mb-20">
                        <label>Size Nasıl Yardımcı Olabiliriz*</label>
                        <textarea
                            {...register("message", {
                                required: "Mesaj alanı zorunludur",
                                minLength: {
                                    value: 10,
                                    message: "Mesaj en az 10 karakter olmalıdır",
                                },
                            })}
                        ></textarea>
                        {errors.message && (
                            <p className="form-error">
                                {errors.message.message}
                            </p>
                        )}
                    </div>

                    <div className="tp-contact-form-btn">
                        <button
                            className="w-100"
                            type="submit"
                            disabled={isSubmitting}
                            aria-label="Send contact message"
                            style={isSubmitting ? { opacity: 0.7, cursor: "not-allowed" } : {}}
                        >
                            <span>
                                <span className="text-1">
                                    {isSubmitting ? "Gönderiliyor..." : "Mesaj Gönder"}
                                </span>
                                <span className="text-2">
                                    {isSubmitting ? "Gönderiliyor..." : "Mesaj Gönder"}
                                </span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ContactUsForm;

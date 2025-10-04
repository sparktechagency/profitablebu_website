import Header from "../AboutUs/Header";
import { Typography } from 'antd';

const { Text } = Typography;

export default function RefundAndCancellationPolicy() {
    return (
        <div className="text-[#000000]">
            <Header
                title="Refund and Cancellation Policy"
                description="Please read our Refund and Cancellation terms carefully before using our services."
            />

            <div className="container mx-auto px-5 pt-20 pb-10">
                <div>
                    <h1 className="text-4xl font-bold mb-6">Refund and Cancellation Policy</h1>

                    <p className="mb-6">
                        At <strong>ProfitableBusinessesForSale.com (PBFS)</strong>, operated by <strong>Global IPQ LLC</strong> (License No. 2430223.01), 
                        we are committed to providing a fair, transparent, and professional online marketplace experience for Business Sellers, Buyers, Brokers, 
                        Franchisors, Investors, Business Idea Listers, and Business Asset Listers worldwide.
                    </p>

                    <p className="mb-6">
                        This Refund and Cancellation Policy outlines our terms regarding all subscriptions, listings, and promotional services offered on PBFS.
                    </p>

                    <h2 className="text-2xl font-bold mb-4">1. Refund Eligibility</h2>
                    <p className="mb-4">
                        All subscriptions and listing purchases on <strong>ProfitableBusinessesForSale.com</strong> are non-refundable once activated, 
                        as access, exposure, and visibility begin immediately after payment.
                    </p>

                    <p className="mb-2">Refunds are only considered in exceptional circumstances such as:</p>
                    <ul className="list-disc pl-6 mb-6">
                        <li>Technical Errors: Duplicate billing, failed payment processing, or double charges due to system malfunction.</li>
                        <li>Inactive Listings: If your listing fails to activate after successful payment.</li>
                        <li>Platform Errors: PBFS system issues preventing your paid subscription or listing from functioning as intended.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mb-4">2. Refund Request & Process</h2>
                    <ul className="list-disc pl-6 mb-6">
                        <li>Approved refunds (in rare, eligible cases) will be processed via the original payment method whenever possible.</li>
                        <li>If a refund to the original source is not feasible, PBFS will process it through a secure bank transfer.</li>
                        <li>Users will receive an email confirmation once the refund has been processed.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mb-4">3. Refunds for User Errors</h2>
                    <p className="mb-4">
                        Refunds requested due to user mistakes (e.g., wrong details, incorrect uploads, or duplicate submissions) 
                        may be subject to a <strong>20% administrative processing fee</strong>. 
                        We strongly recommend reviewing all information carefully before finalizing a listing or subscription.
                    </p>

                    <h2 className="text-2xl font-bold mb-4">4. Cancellations by User Type</h2>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li><strong>Business Sellers:</strong> Subscriptions may be cancelled anytime, but no refund will be issued once a listing goes live.</li>
                        <li><strong>Buyers & Investors:</strong> No refund or credit applies once access is granted to business or idea listings.</li>
                        <li><strong>Brokers:</strong> Non-refundable, as exposure and lead benefits start upon activation.</li>
                        <li><strong>Franchisors:</strong> Plans are non-refundable once published or shown in search results.</li>
                        <li><strong>Business Idea Listers:</strong> Free listings, non-cancellable after publication.</li>
                        <li><strong>Business Asset Listers:</strong> Non-refundable once activated and visible.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mb-4">5. Dissatisfaction with Services</h2>
                    <p className="mb-6">
                        If you are dissatisfied with your experience, please contact us at 
                        <a href="mailto:info@ProfitableBusinessesForSale.com" className="text-blue-600 ml-1">
                            info@ProfitableBusinessesForSale.com
                        </a> 
                        or use our Live Chat available on the website.  
                        Each concern will be reviewed individually, and refund consideration remains at the sole discretion of PBFS management.
                    </p>

                    <h2 className="text-2xl font-bold mb-4">6. Refund Processing Timeline</h2>
                    <ul className="list-disc pl-6 mb-6">
                        <li>Eligible refunds will be processed within <strong>7–14 business days</strong> after approval.</li>
                        <li>Refunds will be credited back to the original payment method or a verified bank account.</li>
                        <li>A confirmation email will be sent once the process is complete.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mb-4">7. Non-Refundable Services</h2>
                    <ul className="list-disc pl-6 mb-6">
                        <li>Business Valuation Services</li>
                        <li>“Grow Your Business” Promotional or Marketing Packages</li>
                        <li>Featured Listing or Homepage Upgrade Services</li>
                        <li>Social Media Advertising Campaigns</li>
                        <li>Subscriptions for Business Sellers, Buyers, Investors, Brokers, Franchisors, and Business Asset Listers once activated</li>
                    </ul>

                    <h2 className="text-2xl font-bold mb-4">8. Need Assistance?</h2>
                    <p className="mb-6">
                        Our dedicated support team is available to assist you at:  
                    </p>
                    <ul className="list-disc pl-6 mb-6">
                        <li>Email: <a href="mailto:info@ProfitableBusinessesForSale.com" className="text-blue-600">info@ProfitableBusinessesForSale.com</a></li>
                        <li>Website: <a href="https://www.ProfitableBusinessesForSale.com" target="_blank" rel="noreferrer" className="text-blue-600">ProfitableBusinessesForSale.com</a></li>
                        <li>Live Chat: Available directly on our website</li>
                    </ul>

                    <div className="mt-12">
                        <Text type="secondary" italic>Last updated: June 28, 2025</Text>
                    </div>
                </div>
            </div>
        </div>
    );
}

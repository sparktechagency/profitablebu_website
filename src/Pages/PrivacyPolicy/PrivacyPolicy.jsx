import Header from "../AboutUs/Header";
import { Typography } from 'antd';

const { Text } = Typography;

export default function PrivacyPolicy() {
          return (
                    <div className="text-[#000000]">
                              <Header
                                        title="Privacy Policy"
                                        description="Please read these terms and conditions carefully before using our services."
                              />

                              <div className="container mx-auto px-5 pt-20 pb-10 ">
                                        <div>
                                                  <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

                                                  <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                                                  <p className="mb-6">
                                                            Welcome to iLera . These Privacy Policy ("Privacy Policy") govern your use of our services provided through the App. By accessing or using the App, you agree to comply with and be bound by these Terms. If you do not agree with these Terms, you should not use the App.
                                                            Services
                                                            iLera allows users to book appointments with healthcare providers. We facilitate the booking process but are not responsible for the medical services provided by healthcare professionals. All medical services are provided by independent healthcare professionals..</p>

                                                  <h2 className="text-2xl font-bold mb-4">User Responsibilities</h2>
                                                  <ul className="mb-6">
                                                            <li>1.Users must provide accurate and complete information when creating an account.</li>
                                                            <li>2.Users are responsible for maintaining the confidentiality of their account credentials.</li>
                                                            <li>3.Users must not use the service for any illegal or unauthorized purpose.</li>
                                                            <li>4.Users must not transmit any worms, viruses, or any code of a destructive nature.</li>
                                                  </ul>


                                                  <h2 className="text-2xl font-bold mb-4">Appointments and Cancellations</h2>
                                                  <ul className="mb-6">
                                                            <li>1.Appointments can be scheduled through our online platform.</li>
                                                            <li>2.Cancellations must be made at least 24 hours in advance to avoid charges.</li>
                                                            <li>3.No-shows will be charged the full service fee.</li>
                                                  </ul>

                                                  <h2 className="text-2xl font-bold mb-4">User Responsibilities</h2>
                                                  <ul className="mb-6">
                                                            <li>1.Appointments can be scheduled through our online platform.</li>
                                                            <li>2.Cancellations must be made at least 24 hours in advance to avoid charges.</li>
                                                            <li>3.No-shows will be charged the full service fee.</li>
                                                  </ul>
                                                  <h2 className="text-2xl font-bold mb-4">Appointments and Cancellations</h2>
                                                  <ul className="mb-6">
                                                            <li>1.Appointments can be scheduled through our online platform.</li>
                                                            <li>2.Cancellations must be made at least 24 hours in advance to avoid charges.</li>
                                                            <li>3.No-shows will be charged the full service fee.</li>
                                                  </ul>
                                                  <h2 className="text-2xl font-bold mb-4">Payments</h2>
                                                  <ul className="mb-6">
                                                            <li>1.Appointments can be scheduled through our online platform.</li>
                                                            <li>2.Cancellations must be made at least 24 hours in advance to avoid charges.</li>
                                                            <li>3.No-shows will be charged the full service fee.</li>
                                                  </ul>
                                                  <div className="mt-12">
                                                            <Text type="secondary" italic>Last updated: June 28, 2025</Text>
                                                  </div>
                                        </div>
                              </div>
                    </div>
          );
}
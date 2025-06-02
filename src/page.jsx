
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SafeAnchorLife() {
  return (
    <div className="p-6 space-y-10 max-w-4xl mx-auto">
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold">SafeAnchor Life</h1>
        <p className="text-lg text-gray-600">
          Proudly serving families across Texas with trusted life insurance solutions.
        </p>
      </header>

      <section className="space-y-6">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Final Expense Insurance</h2>
            <p>
              Designed to help cover end-of-life expenses such as funeral costs and outstanding medical bills.
              Affordable coverage typically available with simplified underwriting, even for seniors with health concerns.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Mortgage Protection Insurance</h2>
            <p>
              Term life insurance designed to pay off or assist with mortgage payments in the event of your death or
              critical illness. Protect your loved ones from losing their home.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Infinite Banking</h2>
            <p>
              Build your own banking system using a properly designed whole life insurance policy. Access liquidity,
              earn dividends, and take control of your financial future.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Other Life Insurance Solutions</h2>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Term Life:</strong> Cost-effective coverage for temporary needs such as income replacement or debt protection.</li>
              <li><strong>Whole Life:</strong> Lifetime protection with guaranteed premiums, cash value accumulation, and dividend potential.</li>
              <li><strong>Indexed Universal Life (IUL):</strong> Flexible coverage with growth potential tied to market indices, ideal for tax-advantaged retirement planning.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="bg-gray-100 p-6 rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">Request a Free Quote</h2>
        <form className="space-y-4">
          <Input placeholder="Full Name" required />
          <Input placeholder="Phone Number" required type="tel" />
          <Input placeholder="Email Address" required type="email" />
          <Input placeholder="City (Texas only)" required />
          <Input placeholder="Coverage Type (e.g., Final Expense, Mortgage Protection)" required />
          <Button type="submit">Get My Quote</Button>
        </form>
      </section>

      <footer className="text-center pt-10 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} SafeAnchor Life | Licensed in Texas | NPN #[Your NPN Here]
      </footer>
    </div>
  );
}

import { terms } from "./terms";

export const metadata = {
  title: "Hakkaren - Terms",
  description: "Terms",
};

export default function Terms() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div
            className="max-w-3xl mx-auto text-center pb-12 md:pb-20"
            dangerouslySetInnerHTML={{
              __html: terms,
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}

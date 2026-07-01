import { personal } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 px-6 py-8 dark:border-gray-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-gray-500 md:flex-row">
        <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
        <p>Designed & built in Port Harcourt.</p>
      </div>
    </footer>
  );
}

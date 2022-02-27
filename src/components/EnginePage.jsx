import PassGenerator from './PassGenerator';

export default function EnginePage() {
  return (
    <div className="flex flex-col items-center">
      <div>Engine Page</div>
      <PassGenerator />
      <p>Remember your password by simply memorizing it.</p>
    </div>
  );
}

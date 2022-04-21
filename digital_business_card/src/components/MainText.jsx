export default function MainText() {
  return (
    <div className="w-3/4 text-left">
      <Paragraph title="About">
        From São Paulo, SP. Gabriel VS Frasão is a student in Front-end
        development with predominant knowledge in basic React and
        Bootstrap/Tailwind CSS. He currently has two startup projects in his
        portfolio: INOVA and Ence Studio.
      </Paragraph>
      <Paragraph title="Interests">
        Sometimes it's good to seat and play guitar. Sometimes it's great to
        resolve math problems. Sometimes it's awesome to learn more about
        programming.
      </Paragraph>
    </div>
  );
}

function Paragraph({ title, children }) {
  return (
    <>
      <h3 className="mb-1 text-xl font-semibold">{title}</h3>

      <p className="mb-4 text-sm text-neutral-400">{children}</p>
    </>
  );
}

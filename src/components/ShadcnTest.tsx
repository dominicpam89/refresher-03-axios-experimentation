import { Button } from './ui/button';

export default function ShadcnTest() {
  return (
    <div className="mx-auto mt-16 max-w-lg min-w-xs">
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
        necessitatibus. Consectetur ullam, obcaecati, non dolorum magnam
        architecto dolores totam consequuntur quam suscipit provident vel libero
        animi nihil, illum labore aut?
      </p>
      <code>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nisi,
        odit provident quod veniam placeat eius consequatur, sit natus
        perferendis facere, recusandae fugit quaerat. Suscipit possimus
        recusandae consequatur eius adipisci!
      </code>
      <div className="flex gap-2">
        <Button>Test Button 1</Button>
        <Button variant="destructive">Test Button 2</Button>
      </div>
    </div>
  );
}

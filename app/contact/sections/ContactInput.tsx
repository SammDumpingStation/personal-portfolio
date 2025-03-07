import GrowingTextArea from "@/components/GrowingTextArea";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const ContactInput = () => {
  return (
    <Card className="max-w-[500px] mx-auto p-9 space-y-5">
      <div className="space-y-2">
        <Label className="text-ugray-500 dark:text-ugray-100" htmlFor="full-name">Full Name</Label>
        <Input id="full-name" placeholder="Samm Caagbay" type="text" />
      </div>
      <div className="space-y-2">
        <Label className="text-ugray-500 dark:text-ugray-100" htmlFor="email">Email</Label>
        <Input id="email" placeholder="Email" type="email" />
      </div>
      <GrowingTextArea />
      <div className="space-y-5">
        <div>
          <Label className="text-ugray-500 dark:text-ugray-100" htmlFor="description">Description</Label>
          <Textarea id="description" placeholder="Enter a Description" />
        </div>
        <div className="flex justify-end">
          <Button variant="outline">Send</Button>
        </div>
      </div>
    </Card>
  );
};

export default ContactInput;

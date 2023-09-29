import { Card } from "@/components/ui/card"
import React from "react"
import { montserrat } from "../utilities/fonts"
import { Button } from "@/components/ui/button"

export default function page() {
  return (
    <div className="min-h-[85vh] px-5 py-20">
      <Card className="max-w-[1400px] m-auto px-5 py-10">
        <h1 className={`text-3xl mb-2 ${montserrat.className}`}>
          Contact with us
        </h1>
        <p className="text-muted-foreground">
          Do you have any suggestions for this project, or if you come across
          any bugs, please feel free to contact us. Your feedback is valuable to
          us.
        </p>
        <form
          action={process.env.FORM_ACTION_URL}
          method="POST"
          className="mt-5 flex flex-col  max-w-[95%]"
        >
          <input
            type="text"
            className="border  border-input bg-transparent  px-3 py-2 shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring mb-5 rounded-sm"
            placeholder="Enter your name"
            name="name"
            id=""
            required
          />
          <input
            type="email"
            className="border border-input bg-transparent  px-3 py-2 shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring mb-5 rounded-sm"
            placeholder="Enter your email"
            name="email"
            id=""
            required
          />
          <textarea
            className="border border-input bg-transparent mb-5  px-3 py-2 shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-sm"
            name="message"
            id=""
            placeholder="Enter your message"
            cols={30}
            rows={5}
            required
          ></textarea>
          <Button variant="default" type="submit" className="flex self-start">
            Submit
          </Button>
        </form>
      </Card>
    </div>
  )
}

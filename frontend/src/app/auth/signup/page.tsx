"use client"
import { useState } from "react"
import * as React from "react"
import axios from "axios"
import { useShoppingCart } from "@/components/Componentcontext"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export default function Page() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const {testUser,settestUser}:any = useShoppingCart();
  const handleSubmit = async (event:any) => {
    event.preventDefault();
    try {
      const email = event.target.email.value;
    const password = event.target.password.value;
    const username = event.target.username.value;
      console.log({ email, password , username })
      const response = await axios.post('http://localhost:8800/api/signup', { email, password,username });
      console.log(response.data);
      settestUser({...testUser,nameUser:response.data.username,check:true});
      console.log(testUser)
      router.push('/');

      
      // Redirect to dashboard or other page on successful sign-in
    } catch (error:any) {
      console.error('Sign-in failed:', error.response.data);
      // Handle sign-in error (e.g., display error message to user)
    }
  };

  return (
    
              <div className="flex items-center justify-center h-screen">
                <div className="w-[350px]">
    <Card >
      <CardHeader>
        <CardTitle>Sign up</CardTitle>
        {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">email</Label>
              <Input id="email" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">password</Label>
              <Input id="password" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Your Password" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="username">username</Label>
              <Input id="username"  name="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder= "name" />
            </div>
            <div>
             <Button type="submit">Connect</Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
      </div> 
      </div> 
       
  )
}

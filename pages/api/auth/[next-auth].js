// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth'
import MailchimpProvider from 'next-auth/providers/mailchimp'
import nodemailer from 'nodemailer'

export default NextAuth({
  providers: [
    MailchimpProvider({
      clientId: process.env.MAILCHIMP_CLIENT_ID,
      clientSecret: process.env.MAILCHIMP_CLIENT_SECRET,
    }),
  ],
})

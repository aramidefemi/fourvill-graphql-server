# fourvill-graphql-server
fourvill-graphql-server



# Specs

User account

- user can change password
- user can add a profile picture
- user can enable two factor authentication
- user can change email address
- user can change timezone
- user can change username
- user can sign-out
- user can set online / availability status
- User profile
    - User can set full name
    - user can set username / display name
    - user can set timezone
    - user can set email
    - user can set a role

Signup

- user can enter workspace URL and signup with email and password
- user can use invite link and signup with email and password
- Admin can set signup to only emails with certain domain names

Owner Signup

- user enters email and password
    - user confirms email
        - user enters workspace url and business type

Login

- User can enter workspace URL and email and password to login

-comments 
 - to login
    - query for workspace with workspace url
    0r
    - query for workspace login with url and email


Forgot password

- user enters workspace url
    - user enter email
        - user get link to reset password for the workspace
            - user goes to link and enters new password

Invitations

- user can invite via email
- application sends invitation mail
- user can create invitation link and share

Workspace

- Admin can set workspace icon
- Admin can change workspace url
- Admin can change workspace language
- ~~Admin or user can create channels similar to slack~~
- Admin enable or disable user's ability to create channels

Manage Members

- Admin can remove member
- Admin can see list of members
- Admin can change member permissions
- There are four member types Owner, Admin, Member, and Guest

Theme

- Admin can change workspace theme

Integrations

- Admin can add integrations to workspace
- Admin can remove integrations from workspace

Search

- user can search through all comments, contents and conversations
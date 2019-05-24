Linux Instructions
====

## Install software

Most Linux users are already familiar with the install processes of their 
systems.  However, Chrome will need to be downloaded separately due to 
licensing issues on most platforms. Download the appropariate package for your
Linux system here:

[Google Chrome](https://www.google.com/intl/en-US/chrome/browser/)

Google Chrome has excellent developer tools that we will utilize when we get
into scraping websites.  Chromium is also available and is basically the 
development version of Chrome.

Additionally you will need a text editor.  If you want a built in one you can
try __kate__ or if you do not already have a preferred editor, then check out 

[Sublime Text](http://www.sublimetext.com/)

Sublime is what we'll be using in class.

Finally, you will need to install Node.js, and git.  They can all be
installed with your systems standard software installer via:


### Redhat, Fedora, CentOS

As root run the following command:

```bash
dnf install git nodejs 
```

### Debian, Ubuntu

As root run the following command:

```bash
sudo apt-get -y install git nodejs 
```

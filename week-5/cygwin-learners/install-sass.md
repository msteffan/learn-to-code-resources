# Install Sass with Cygwin

### STEP 1: Verify that you have Ruby Gems

From your Cygwin command line, enter:

```bash
gem -v
```

You should see the following output:

![verify-gem-install](img/cygwin-gem-verify-install.png)

### STEP 2: Install the Sass Gem

Make sure you are in your Cygwin home directory (this is the directory that Cygwin opens in by default when you launch the Cygwin app). From the command line, enter:

```bash
gem install sass
```
Your computer will ask you if you want to allow this installation. _Yes_, you do.

![Cygwin-allow-sass](img/cygwin-6-allow-sass.png)

Cygwin will start installing Sass ...

![cygwin-installing-sass](img/cygwin-6-gem-install-sass)

When the install is complete, Cygwin will output something like:

`1 gem installed`

### STEP 3: Add the new **bin** directory to your `PATH` environment variable

When we installed Sass, the Sass commands were all written to a new directory called **bin**. This directory is located in your Cygwin **home** directory. You can see this location by typing `pwd` on the Cygwin command line. The output will be:  

```bash
/<your-name>/home
```
 This is where you are when you first launch the Cygwin application.

 Type `ls -a` and you will see a _hidden_ file called **.bash_profile**. We need to add some code to this file now to make sure that when we type Sass commands, Cygwin and your Windows operating system will recognize them. 

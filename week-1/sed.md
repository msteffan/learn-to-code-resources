# Sed

`sed` is short for **S**tream **Ed**iting... 

## For Substitutions

The `sed` command can be used to make substitutions 

**pets.txt**: 

```
I like cats! Now I like dogs! Scratch that, I like cats! 
```

From the command line: 

```
$ sed 's/cats/guinnea pigs/' < pets.txt > new-pets.txt
```
Then: 

```
$ cat new-pets.txt
```
**Output**: 

```
I like guinnea pigs! I like dogs! Scratch that, I like cats! 
```

**Explanation**: 

- `sed 's/<regex search pattern>/<string to replace>/'`: this excepts standard regex pattern matches
- `< pets.txt`: search the file **pet.txt**
- `> new-pets.txt`: output the result in **new-pets.txt**

## global option

Notice that `sed` only changed the first occurence of "cats" to "guinnea pigs". Add the "global" option `g` after the final delimiter `/` to replace all instances of the regex search pattern instead of just the first one:  

**pets.txt**: 

```
I like cats! Now I like dogs! Scratch that, I like cats! 
```

From the command line: 

```
$ sed 's/cats/guinnea pigs/g' < pets.txt > no-cats.txt
```
Then: 

```
$ cat no-cats.txt
```
**Output**: 

```
I like guinnea pigs! I like dogs! Scratch that, I like guinnea pigs! 
```

## Sed reads every line 

`sed` will run your match/replace on each line in a file: 

**multi-pets.txt**  

```
I like dogs AND I like cats!
I like cats AND I like dogs! 
I like guinnea pigs and I like cats (and I like dogs)!
```

From the command line: 

```
$ sed 's/cats/common house foxes/g' < multi-pets.txt > foxes.txt
```

Then:

```
$ echo foxes.txt
```

**Output:**

```
I like dogs AND I like common house foxes!
I like common house foxes AND I like dogs! 
I like guinnea pigs and I like common house foxes (and I like dogs)! 
```
 


reference: [super weird grymoire blog](http://www.grymoire.com/Unix/Sed.html#uh-0)


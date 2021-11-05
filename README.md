## NOVEMBER NEWS DROP

Over the last few months, I've not fired up XAMPP at all, instead relying on Vagrant Homestead for local dev. Toward the end of November I expect to have Homestead box setup documentation available for firing up Open Webcourses locally. --Sławomir


## Introduction

Online web course platform. Public release still not ready for production systems.

## Laravel & Angular combo

Angular source files are in `/resources/frontend/webcourses`. They're served via Laravel's AngularController +Blade.

To recompile the Angular source code, run `npm run-script build:prod`.

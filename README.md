
     ***** *    **   ***         ***** *     **          * ***        ***          **     
  ******  *  *****    ***     ******  **    **** *     *  ****  *    *****       ****  *  
 **   *  *     *****   ***   **   *  * **    ****     *  *  ****    *   ***      ******   
*    *  **     * **      ** *    *  *  **    * *     *  **   **          ***    *   **    
    *  ***     *         **     *  *    **   *      *  ***                ***  *          
   **   **     *         **    ** **    **   *     **   **                 ****           
   **   **     *         **    ** **     **  *     **   **   ***            ***           
   **   **     *         **    ** **     **  *     **   **  ****  *         ****          
   **   **     *         **    ** **      ** *     **   ** *  ****         *  ***         
   **   **     *         **    ** **      ** *     **   ***    **         *    ***        
    **  **     *         **    *  **       ***      **  **     *         *      ***       
     ** *      *         *        *        ***       ** *      *        *        ***      
      ***      ***      *     ****          **        ***     *        *          ***   * 
       ******** ********     *  *****                  *******        *            *****  
         ****     ****      *     **                     ***         *              ***   
                            *                                                             
                             **                                                           
                                                                                          


## Homestead Branch (January 2022)

The homstead branch is now capable of hosting itself through creating a virtual machine using Vagrant. Several additional steps are required to initialise Laravel and Angular, and for that reason the branch is still limited in utility.

Since it takes a WNGX tech only 3-5 minutes to get the system up and running, I expect that by month's end all steps will be done by script, or eliminated.

Thanks to Collier for starting work for making WNGX installable via Composer. We look forward to bringing this option to techs not versed in or wishing to avoid Git.


## Introduction

Online web course platform. Public release still not ready for production systems.


## Our dev environment

VirtualBox / Vagrant Laravel Homestead running Ubuntu 64-bit


## Laravel & Angular combo

Angular source files are in `/resources/frontend/webcourses`. They're served via Laravel's AngularController +Blade.

To recompile the Angular source code, run `npm run-script build:prod` in `/resources/frontend/webcourses/app/src`.

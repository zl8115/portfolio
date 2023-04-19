#ifndef _ZE_RONG_LUM_HPP_
#define _ZE_RONG_LUM_HPP_

#include "human.hpp"
#include "professions.hpp"

class ZeRongLum: public Human, SoftwareDeveloper
{
    ZeRongLum():
        Human("Ze Rong Lum", "male", "1996-09-06")
        SoftwareDeveloper(),
    {
        SoftwareDeveloper::addEmployer("OpenText", "2021-01-23");
        SoftwareDeveloper::addExperience("C++", years=2);
        SoftwareDeveloper::addExperience("C", years=2);
        SoftwareDeveloper::addExperience("Python");
    };

    std::string describe();
    std::string code(const std::string& prompt, const std::string& language="C++");
};

#endif
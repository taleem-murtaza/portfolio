import React, { useState } from 'react'
import './Skills.css'
import { SKILLS } from '../../utils/data'
import SkillCard from './SkillCard/SkillCard'
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard';
function Skills() {

    const [selectSkills, setSelectSkill] = useState(SKILLS[0]);
    const handleSelectSkill =(data)=>{
        setSelectSkill(data);
    }
  return (
    <section className='skills-container' id='skills'>
        <h5>Technical Proficiency</h5>
        <div className="skills-content">
            <div className="skills">
                {
                    SKILLS.map((item)=>(
                        <SkillCard
                        key={item.title}
                        iconUrl={item.icon}
                        title={item.title}
                        isActive={selectSkills.title ===item.title}
                        onClick={()=>{
                            handleSelectSkill(item);
                        }}
                        />
                    ))
                }
            </div>
            <div className="skills-info">
                <SkillsInfoCard
                heading={selectSkills.title}
                skills={selectSkills.skills}
                />
            </div>
        </div>
    </section>
  )
}

export default Skills
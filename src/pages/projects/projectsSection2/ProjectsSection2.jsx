import React from 'react'
import './projectsSection2.scss'
import { pngs } from '../../../constants/images'

const allProjects = [
  {
    projectImgUrl: pngs.project1,
    projectArea: '001 - Комплекс вилл в деревне Эпископи',
    projectStatus: 'Завершен',
    projectType: 'Частная',
    projectNote: 'Примечание',
    projects: [
      {
        type: 'Вилла TYPE B',
        bedroom: 3,
        area: 148.6,
        yard: 345.1,
        price: 450000,
      },
    ],
  },
  {
    projectImgUrl: pngs.project2,
    projectArea: '002 Комплекс вилл в деревне Эмба (Пафос)',
    projectStatus: 'В процессе',
    projectType: 'Инвестиционная ',
    projectNote: 'Бассейн',
    projects: [
      {
        type: 'Вилла TYPE A(M)',
        bedroom: 3,
        area: 145.6,
        yard: 323,
        price: 450000,
      },
      {
        type: 'Вилла TYPE A',
        bedroom: 3,
        area: 148.6,
        yard: 345.1,
        price: 450000,
      },
      {
        type: 'Вилла TYPE A',
        bedroom: 3,
        area: 148.6,
        yard: 345.1,
        price: 450000,
      },
      {
        type: 'Вилла TYPE A',
        bedroom: 3,
        area: 148.6,
        yard: 345.1,
        price: 450000,
      },
    ],
  },
  {
    projectImgUrl: pngs.project1,
    projectArea: '002 Комплекс вилл в деревне Эмба (Пафос)',
    projectStatus: 'В процессе',
    projectType: 'Инвестиционная ',
    projectNote: 'Бассейн',
    projects: [
      {
        type: 'Вилла TYPE A(M)',
        bedroom: 3,
        area: 145.6,
        yard: 323,
        price: 450000,
      },
      {
        type: 'Вилла TYPE A',
        bedroom: 3,
        area: 148.6,
        yard: 345.1,
        price: 450000,
      },
      {
        type: 'Вилла TYPE A',
        bedroom: 3,
        area: 148.6,
        yard: 345.1,
        price: 450000,
      },
      {
        type: 'Вилла TYPE A',
        bedroom: 3,
        area: 148.6,
        yard: 345.1,
        price: 450000,
      },
    ],
  },
  {
    projectImgUrl: pngs.project2,
    projectArea: '002 Комплекс вилл в деревне Эмба (Пафос)',
    projectStatus: 'В процессе',
    projectType: 'Инвестиционная ',
    projectNote: 'Бассейн',
    projects: [
      {
        type: 'Вилла TYPE A(M)',
        bedroom: 3,
        area: 145.6,
        yard: 323,
        price: 450000,
      },
      {
        type: 'Вилла TYPE A',
        bedroom: 3,
        area: 148.6,
        yard: 345.1,
        price: 450000,
      },
      {
        type: 'Вилла TYPE A',
        bedroom: 3,
        area: 148.6,
        yard: 345.1,
        price: 450000,
      },
      {
        type: 'Вилла TYPE A',
        bedroom: 3,
        area: 148.6,
        yard: 345.1,
        price: 450000,
      },
    ],
  },
  {
    projectImgUrl: pngs.project1,
    projectArea: '002 Комплекс вилл в деревне Эмба (Пафос)',
    projectStatus: 'В процессе',
    projectType: 'Инвестиционная ',
    projectNote: 'Бассейн',
    projects: [
      {
        type: 'Вилла TYPE A(M)',
        bedroom: 3,
        area: 145.6,
        yard: 323,
        price: 450000,
      },
      {
        type: 'Вилла TYPE A',
        bedroom: 3,
        area: 148.6,
        yard: 345.1,
        price: 450000,
      },
      {
        type: 'Вилла TYPE A',
        bedroom: 3,
        area: 148.6,
        yard: 345.1,
        price: 450000,
      },
      {
        type: 'Вилла TYPE A',
        bedroom: 3,
        area: 148.6,
        yard: 345.1,
        price: 450000,
      },
    ],
  },
  {
    projectImgUrl: pngs.project2,
    projectArea: '002 Комплекс вилл в деревне Эмба (Пафос)',
    projectStatus: 'В процессе',
    projectType: 'Инвестиционная ',
    projectNote: 'Бассейн',
    projects: [
      {
        type: 'Вилла TYPE A(M)',
        bedroom: 3,
        area: 145.6,
        yard: 323,
        price: 450000,
      },
      {
        type: 'Вилла TYPE A',
        bedroom: 3,
        area: 148.6,
        yard: 345.1,
        price: 450000,
      },
      {
        type: 'Вилла TYPE A',
        bedroom: 3,
        area: 148.6,
        yard: 345.1,
        price: 450000,
      },
      {
        type: 'Вилла TYPE A',
        bedroom: 3,
        area: 148.6,
        yard: 345.1,
        price: 450000,
      },
    ],
  },
]

export const ProjectsSection2 = () => {
  return (
    <section className="project-section2">
      <div className="wrapper">
        {allProjects.map((project) => (
          <div className="projects-row flex">
            <div>
              <img src={project.projectImgUrl} alt="" />
            </div>
            <div className='projects-content'>
              <h2>{project.projectArea}</h2>
              <p>
                Статус: <span>{project.projectStatus}</span>
              </p>
              <p>
                Тип: <span>{project.projectType}</span>
              </p>
              <p>
                Примечание: <span>{project.projectNote}</span>
              </p>
              <div className="table-content">
                <table>
                  <thead>
                    <tr>
                      <th>Тип</th>
                      <th>Спальни</th>
                      <th>Плошадь</th>
                      <th>Участок</th>
                      <th>Цена</th>
                    </tr>
                  </thead>
                  <tbody>
                    {project.projects.map((item) => (
                      <tr>
                        <td>{item.type}</td>
                        <td>{item.bedroom}</td>
                        <td>{item.area}</td>
                        <td>{item.yard}</td>
                        <td>{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button className='btn extend-btn'>Развернуть</button>
            </div>
          </div>
        ))}
        <div className="projects-pagination">
          <button className="caret-left"></button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button className="caret-right"></button>
        </div>
      </div>
    </section>
  )
}

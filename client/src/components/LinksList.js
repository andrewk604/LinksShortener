import React from 'react'
import {Link} from 'react-router-dom'

export const LinksList = ({ links }) => {

    if (!links.length) {
        return (<p style={{display:"flex", justifyContent:"center", alignItems: "center", marginTop: '20%'}}>Ссылок пока нет, попробуйте создать! </p>)
    }

    return (
        <table>
        <thead>
          <tr>
              <th>№</th>
              <th>Оригинал</th>
              <th>Сокращённая</th>
              <th>Открыть</th>
          </tr>
        </thead>

        <tbody>
            { links.map( (link, index) => {
                return (
                    <tr>
                        <td>{ index + 1 }</td>
                        <td>{ link.from }</td>
                        <td>{ link.to }</td>
                        <td>
                            <Link to={`/detail/${link._id}`}>Статистика</Link>
                        </td>
                    </tr>
                )
            })}
          
        </tbody>
      </table>
    )
}
import styled from 'styled-components';

export const Table = ({ headers, data, configure }) => {
  return (
    <table class='border'>
      <thead>
        <tr>
          {headers.map((header, headerindex) => {
            return (
              <th
                class={configure.padding}
                key={headerindex}
                style={{ width: header['width'] }}
                align={header['alignHeader']}
              >
                {header['title']}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((item, rowindex) => {
          return (
            <tr key={rowindex}>
              {headers.map((header, dataindex) => {
                return (
                  <td
                    class={configure.padding}
                    align={header['alignContent']}
                    key={dataindex}
                  >
                    {item[header['title']]}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

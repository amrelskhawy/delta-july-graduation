import React from 'react'

export const AllDegrees = ({ student }) => {

  const tableHeaders = [
    'التمريض النظرى',
    'التمريض العملى',
    'الترمنولوجى',
    'التمريض الباطنى و الجراحي',
    'التشريح',
    'الاسعافات الأولية',
    'مكافحة العدوى',
    'تمريض النساء و الأطفال',
    'الفارما',
    'التحاليل الطبية',
  ]
  return (
    <div>
      <h2 className='text-2xl font-medium text-center mb-8'>
        بيان بدرجات الطالب المذكور أعلاه
      </h2>
      <div class="table_component" role="region" tabindex="0">
        <table>
          <thead>
            <tr>
              {
                tableHeaders.map(head => <th style={{
                  fontSize: '.75rem'
                }}>{head}</th>)
              }


            </tr>
          </thead>
          <tbody>
            {/* Student Mark */}
            <tr>
              <td>
                {student.theory}
              </td>
              <td>
                {student.practical}
              </td>
              <td>
                {student.E}
              </td>
              <td>
                {student.surgical}
              </td>
              <td>
                {student.anatomy}
              </td>
              <td>
                {student.first_aids}
              </td>
              <td>
                {student.infection_control}
              </td>
              <td>
                {student.women}
              </td>
              <td>
                {student.pharma}
              </td>
              <td>
                {student.medical}
              </td>
            </tr>

            {/* Full Marks */}
            <tr>
              <td style={{ color: "red" }}><b>50</b></td>
              <td style={{ color: "red" }}><b>90</b></td>
              <td style={{ color: "red" }}><b>30</b></td>
              <td style={{ color: "red" }}><b>50</b></td>
              <td style={{ color: "red" }}><b>50</b></td>
              <td style={{ color: "red" }}><b>30</b></td>
              <td style={{ color: "red" }}><b>30</b></td>
              <td style={{ color: "red" }}><b>50</b></td>
              <td style={{ color: "red" }}><b>50</b></td>
              <td style={{ color: "red" }}><b>50</b></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='mt-12 text-2xl font-medium grid gap-3'>
        <div className='top grid grid-cols-3 gap-2 text-center'>
          <p>
            المجموع الكلى
          </p>
          <p>
            النسبة المئوية
          </p>
          <p>
            التقدير
          </p>
        </div>
        <div className='bottom font-bold grid grid-cols-3 gap-2 text-center'>
          <p>
            {student.total} <br /> <hr className='w-24 border-[1.5px] border-red-500 mx-auto' /> <span className='text-red-600'>480</span>
          </p>
          <p>
            {((student.total / 480) * 100).toFixed(2)}%
          </p>
          <p>
            {student.appreciation}
          </p>
        </div>
      </div>
    </div>
  )
}

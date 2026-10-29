
const departments = [
  {
    title: 'DMD (Dev.)',
    name: 'Mr. Kashif Fayyaz',
    children: [
      {
        title: 'Director (Dev.) / (P&D)',
        children: [
          {
            title: 'Deputy Director (Dev.)',
            children: [
              { title: 'Asst. Director (Dev.-I)' },
              { title: 'Asst. Director (Dev.-2)' },
              { title: 'Asst. Director (QCD)' },
            ],
          },
        ],
      },
      {
        title: 'Sub Engineer (Civil)',
        quantity: '5 Nos.',
      },
    ],
  },
  {
    title: 'DMD (O&M)',
    name: 'Mr. Waqas Naseer',
    children: [
      {
        title: 'Director (O&M)',
        children: [
          {
            title: 'Deputy Director (OPS 1)',
            children: [
              { title: 'Asst. Director (OPS-1)' },
            ],
          },
          {
            title: 'Deputy Director (OPS 2)',
            children: [
              { title: 'Asst. Director (OPS-2)' },
              {
                title: 'Sub Engineer (Mach.)',
                quantity: '2 Nos.',
              },
               {
            title: 'Sub Engineer (Civil) — OPS-1 & OPS-2',
            quantity: '12 Nos.',
          },
            ],
          },
          {
            title:
              'Deputy Director (Store / Work Shop / IT / Safety / GIS)',
            children: [
              { title: 'Asst. Director (IT / GIS / Safety etc.)' },
              { title: 'Asst. Director (Maint. / Store / Workshop)' },
              {
                title: 'Sub Engineer (Civil / Elect. / Mech.)',
                quantity: '2 Nos.',
              },
            ],
          },
         
        ],
      },
    ],
  },
  {
    title: 'Director (A/F/R)',
    children: [
      {
        title: 'Deputy Director (A/F/R)',
        children: [
          { title: 'Asst. Director (A/F/R)' },
        ],
      },
    ],
  },
  {
    title: 'Deputy Director (HQ)',
    children: [
      { title: 'Asst. Director (1)' },
      { title: 'Asst. Director (2)' },
    ],
  },
]

function OrgNode({ item, level = 0 }) {
  return (
    <div className="flex min-w-0 flex-col items-center">
      <div
        className={`w-full rounded-md border px-2 py-2 text-center shadow-sm ${
          level === 0
            ? 'border-[#075985] bg-[#075985] text-white'
            : level === 1
              ? 'border-slate-300 bg-slate-100 text-[#061D33]'
              : 'border-slate-200 bg-white text-slate-700'
        }`}
      >
        <p className="text-[11px] font-bold leading-snug sm:text-xs">
          {item.title}
        </p>

        {item.name && (
          <p className="mt-1 text-[11px] leading-snug">
            {item.name}
          </p>
        )}

        {item.quantity && (
          <p
            className={`mt-1 text-[10px] font-semibold ${
              level === 0 ? 'text-teal-100' : 'text-teal-700'
            }`}
          >
            {item.quantity}
          </p>
        )}
      </div>

      {item.children?.length > 0 && (
        <>
          <div className="h-3 w-px bg-slate-300" />

          <div className="grid w-full grid-cols-1 gap-2 border-t border-slate-300 pt-2">
            {item.children.map((child, index) => (
              <div
                key={`${child.title}-${index}`}
                className="min-w-0"
              >
                <OrgNode item={child} level={level + 1} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default function OrganizationStructure() {
  return (
    <section className="bg-slate-50 px-3 py-8 sm:px-5">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-4 text-center">
          <h1 className="text-2xl font-bold text-[#061D33] sm:text-3xl">
            Organization Structure
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            WASA Jhang
          </p>
        </div>

        {/* One shared frame for the complete organization chart */}
        <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
          <div className="mx-auto w-full max-w-2xl">
            <div className="rounded-md bg-[#061D33] px-3 py-3 text-center text-white">
              <h2 className="text-sm font-bold sm:text-base">
                Managing Director
              </h2>
              <p className="mt-1 text-xs sm:text-sm">
                Syed Saulat Raza
              </p>
            </div>
          </div>

          <div className="mx-auto h-5 w-px bg-slate-300" />

          {/* Compact departments in the same frame */}
          <div className="overflow-x-auto pb-2">
            <div className="grid min-w-[1050px] grid-cols-4 items-start gap-2 border-t border-slate-300 pt-3">
              {departments.map((department, index) => (
                <div
                  key={`${department.title}-${index}`}
                  className="min-w-0"
                >
                  <OrgNode item={department} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const groupsData = [
    {
        id: 1,
        code: 'СКИП-251',
        name: 'Строительство и эксплуатация инженерных сооружений',
        course: 2,
        faculty: 'Технический',
        curator: 'Иванова Мария Ивановна',
        curatorPhone: '+7 (912) 345-67-89',
        curatorEmail: 'ivanova.mi@bpkhmao.ru',
        studentsCount: 24,
        students: [
            'Алексеев Д.М.', 'Борисова Е.С.', 'Васильев П.А.', 'Григорьева А.Н.',
            'Дмитриев К.В.', 'Егорова Н.П.', 'Жуков С.И.', 'Зайцева О.Р.',
            'Иванов А.А.', 'Козлова Т.М.', 'Лебедев В.Г.', 'Михайлова Е.Д.',
            'Николаев И.К.', 'Орлова Л.В.', 'Павлов Р.С.', 'Романова Ю.А.',
            'Сидоров М.Н.', 'Тимофеева К.И.', 'Устинов Д.Л.', 'Федорова П.С.',
            'Харитонов Г.Р.', 'Цветкова Н.В.', 'Чернышов А.Е.', 'Широкова В.Б.'
        ]
    },
    {
        id: 2,
        code: 'МКИП-221',
        name: 'Монтаж, наладка и эксплуатация электрооборудования',
        course: 4,
        faculty: 'Технический',
        curator: 'Петров Сергей Владимирович',
        curatorPhone: '+7 (912) 456-78-90',
        curatorEmail: 'petrov.sv@bpkhmao.ru',
        studentsCount: 22,
        students: [
            'Антонов В.И.', 'Беляева Л.Н.', 'Виноградов А.П.', 'Гаврилова Т.С.',
            'Данилов И.М.', 'Емельянова О.В.', 'Захаров К.Д.', 'Игнатьева А.Р.',
            'Казаков П.Л.', 'Леонова М.А.', 'Матвеев Н.С.', 'Назарова Е.К.',
            'Осипов Р.В.', 'Панова С.Г.', 'Рыбаков Т.Ю.', 'Соболева А.И.',
            'Тарасов Д.Н.', 'Ульянова Е.П.', 'Филиппов В.С.', 'Хохлова М.В.',
            'Царев Г.А.', 'Яковлева Н.Ф.'
        ]
    },
    {
        id: 3,
        code: 'Э-251',
        name: 'Экономика и бухгалтерский учет',
        course: 2,
        faculty: 'Экономический',
        curator: 'Соколова Елена Анатольевна',
        curatorPhone: '+7 (912) 567-89-01',
        curatorEmail: 'sokolova.ea@bpkhmao.ru',
        studentsCount: 28,
        students: [
            'Абрамова К.В.', 'Богданов Д.С.', 'Воробьева А.А.', 'Герасимов М.П.',
            'Дорофеева Е.Н.', 'Ершов И.Г.', 'Жданова Т.Р.', 'Зиновьев А.Л.',
            'Исаева В.М.', 'Кириллов Н.К.', 'Крылова О.С.', 'Лазарев П.В.',
            'Малышева Ю.И.', 'Новиков Р.А.', 'Овчинникова Е.Д.', 'Поляков С.Б.',
            'Родионова Л.Е.', 'Сергеев Т.Ф.', 'Титова М.Г.', 'Уваров Д.Х.',
            'Фомина А.Ц.', 'Харитонова К.Ш.', 'Чесноков И.Ю.', 'Шаповалова Я.А.',
            'Щербаков Е.В.', 'Юдина А.Г.', 'Яковлева М.Д.', 'Янковская Е.Р.'
        ]
    },
    {
        id: 4,
        code: 'ИСиП-231',
        name: 'Информационные системы и программирование',
        course: 3,
        faculty: 'Информационных технологий',
        curator: 'Коновалова Анастасия Евгеньевна',
        curatorPhone: '+7 (912) 678-90-12',
        curatorEmail: 'anastacia.shtabnova@yandex.ru',
        studentsCount: 17,
        students: [
            'Бабкина М.М.', 'Белоглазов С.В.', 'Гапизова З.М.', 'Гришанович К.В.',
            'Лашков М.Ю.', 'Лемтюгин П.А.', 'Летягина А.В.', 'Молданов И.М.',
            'Неверова М.М.', 'Плаксин Е.А.', 'Саликова С.И.', 'Сапрыкин А.С.',
            'Тур Д.Н.', 'Усов М.С.', 'Чабин В.Д.', 'Чуркин Н.Д.',
            'Шульгина А.А.'
        ]
    },
    {
        id: 5,
        code: 'ТД-241',
        name: 'Товароведение и экспертиза качества товаров',
        course: 2,
        faculty: 'Экономический',
        curator: 'Кузнецова Анна Владимировна',
        curatorPhone: '+7 (912) 789-01-23',
        curatorEmail: 'kuznecova.av@bpkhmao.ru',
        studentsCount: 19,
        students: [
            'Аксенова В.Б.', 'Белоусов Г.В.', 'Власова Д.Г.', 'Горбунова Е.Д.',
            'Демин Ж.Е.', 'Еремина З.Ж.', 'Журавлев И.З.', 'Зеленова К.И.',
            'Игнатов Л.К.', 'Калинина М.Л.', 'Лапин Н.М.', 'Медведева О.Н.',
            'Некрасов П.О.', 'Орехова Р.П.', 'Петухова С.Р.', 'Рогов Т.С.',
            'Сазонова У.Т.', 'Титов Ф.У.', 'Устинова Х.Ф.'
        ]
    },
    {
        id: 6,
        code: 'ПК-201',
        name: 'Поварское и кондитерское дело',
        course: 1,
        faculty: 'Технический',
        curator: 'Васильева Людмила Ивановна',
        curatorPhone: '+7 (912) 890-12-34',
        curatorEmail: 'vasileva.li@bpkhmao.ru',
        studentsCount: 25,
        students: [
            'Агеева А.А.', 'Бобров Б.Б.', 'Воронина В.В.', 'Гусева Г.Г.',
            'Дроздов Д.Д.', 'Ежова Е.Е.', 'Зайцев З.З.', 'Ильина И.И.',
            'Комаров К.К.', 'Лебедева Л.Л.', 'Миронов М.М.', 'Носова Н.Н.',
            'Орлов О.О.', 'Павлова П.П.', 'Романова Р.Р.', 'Серова С.С.',
            'Титова Т.Т.', 'Ульянова У.У.', 'Федотов Ф.Ф.', 'Харитонова Х.Х.',
            'Цветков Ц.Ц.', 'Чернова Ч.Ч.', 'Шишкина Ш.Ш.', 'Щукин Щ.Щ.',
            'Юрьева Ю.Ю.'
        ]
    },
    {
        id: 7,
        code: 'МРА-211',
        name: 'Мастер по ремонту автомобилей',
        course: 3,
        faculty: 'Технический',
        curator: 'Николаев Павел Романович',
        curatorPhone: '+7 (912) 901-23-45',
        curatorEmail: 'nikolaev.pr@bpkhmao.ru',
        studentsCount: 18,
        students: [
            'Абрамов А.А.', 'Борисов Б.Б.', 'Васильев В.В.', 'Григорьев Г.Г.',
            'Данилов Д.Д.', 'Егоров Е.Е.', 'Жуков Ж.Ж.', 'Зайцев З.З.',
            'Иванов И.И.', 'Козлов К.К.', 'Лебедев Л.Л.', 'Михайлов М.М.',
            'Николаев Н.Н.', 'Орлов О.О.', 'Павлов П.П.', 'Романов Р.Р.',
            'Сидоров С.С.', 'Федоров Ф.Ф.'
        ]
    },
    {
        id: 8,
        code: 'ДО-221',
        name: 'Дошкольное образование',
        course: 4,
        faculty: 'Гуманитарный',
        curator: 'Федорова Татьяна Григорьевна',
        curatorPhone: '+7 (912) 012-34-56',
        curatorEmail: 'fedorova.tg@bpkhmao.ru',
        studentsCount: 27,
        students: [
            'Александрова А.А.', 'Белова Б.Б.', 'Виноградова В.В.', 'Галкина Г.Г.',
            'Давыдова Д.Д.', 'Ермолаева Е.Е.', 'Журавлева Ж.Ж.', 'Зимина З.З.',
            'Иванова И.И.', 'Ковалева К.К.', 'Львова Л.Л.', 'Морозова М.М.',
            'Никитина Н.Н.', 'Осипова О.О.', 'Попова П.П.', 'Румянцева Р.Р.',
            'Соколова С.С.', 'Тихонова Т.Т.', 'Ульянова У.У.', 'Филиппова Ф.Ф.',
            'Хохлова Х.Х.', 'Царева Ц.Ц.', 'Чижова Ч.Ч.', 'Шарова Ш.Ш.',
            'Щеглова Щ.Щ.', 'Юрьева Ю.Ю.', 'Яковлева Я.Я.'
        ]
    },
    {
        id: 9,
        code: 'ФК-231',
        name: 'Физическая культура',
        course: 3,
        faculty: 'Гуманитарный',
        curator: 'Егоров Александр Алексеевич',
        curatorPhone: '+7 (912) 123-45-67',
        curatorEmail: 'egorov.aa@bpkhmao.ru',
        studentsCount: 20,
        students: [
            'Астахов А.А.', 'Бирюков Б.Б.', 'Воронов В.В.', 'Горбунов Г.Г.',
            'Доронин Д.Д.', 'Елисеев Е.Е.', 'Захаров З.З.', 'Исаев И.И.',
            'Карпов К.К.', 'Ларионов Л.Л.', 'Мельников М.М.', 'Наумов Н.Н.',
            'Овчинников О.О.', 'Панкратов П.П.', 'Русаков Р.Р.', 'Самойлов С.С.',
            'Тарасов Т.Т.', 'Уваров У.У.', 'Фомин Ф.Ф.', 'Харитонов Х.Х.'
        ]
    },
    {
        id: 10,
        code: 'ЗЧС-241',
        name: 'Защита в чрезвычайных ситуациях',
        course: 2,
        faculty: 'Технический',
        curator: 'Громов Игорь Васильевич',
        curatorPhone: '+7 (912) 234-56-78',
        curatorEmail: 'gromov.iv@bpkhmao.ru',
        studentsCount: 23,
        students: [
            'Анисимов А.А.', 'Баранов Б.Б.', 'Волков В.В.', 'Герасимов Г.Г.',
            'Демин Д.Д.', 'Ермаков Е.Е.', 'Зубов З.З.', 'Ильин И.И.',
            'Кабанов К.К.', 'Лазарев Л.Л.', 'Макаров М.М.', 'Назаров Н.Н.',
            'Орехов О.О.', 'Панфилов П.П.', 'Родионов Р.Р.', 'Савин С.С.',
            'Терехов Т.Т.', 'Устинов У.У.', 'Фирсов Ф.Ф.', 'Хромов Х.Х.',
            'Цветков Ц.Ц.', 'Чумаков Ч.Ч.', 'Шубин Ш.Ш.'
        ]
    },
    {
        id: 11,
        code: 'СВ-251',
        name: 'Сварочное производство',
        course: 1,
        faculty: 'Технический',
        curator: 'Борисов Константин Михайлович',
        curatorPhone: '+7 (912) 345-67-89',
        curatorEmail: 'borisov.km@bpkhmao.ru',
        studentsCount: 15,
        students: [
            'Андреев А.А.', 'Борисов Б.Б.', 'Владимиров В.В.', 'Григорьев Г.Г.',
            'Дмитриев Д.Д.', 'Евсеев Е.Е.', 'Жилин Ж.Ж.', 'Зиновьев З.З.',
            'Игнатов И.И.', 'Кондратьев К.К.', 'Лукин Л.Л.', 'Михайлов М.М.',
            'Никитин Н.Н.', 'Осипов О.О.', 'Пахомов П.П.'
        ]
    },
    {
        id: 12,
        code: 'ПД-261',
        name: 'Правоохранительная деятельность',
        course: 1,
        faculty: 'Гуманитарный',
        curator: 'Орлова Наталья Юрьевна',
        curatorPhone: '+7 (912) 456-78-90',
        curatorEmail: 'orlova.ny@bpkhmao.ru',
        studentsCount: 26,
        students: [
            'Алексеев А.А.', 'Беляев Б.Б.', 'Васильев В.В.', 'Гаврилов Г.Г.',
            'Данилов Д.Д.', 'Емельянов Е.Е.', 'Жуков Ж.Ж.', 'Зайцев З.З.',
            'Иванов И.И.', 'Козлов К.К.', 'Лебедев Л.Л.', 'Михайлов М.М.',
            'Николаев Н.Н.', 'Орлов О.О.', 'Павлов П.П.', 'Романов Р.Р.',
            'Сидоров С.С.', 'Тимофеев Т.Т.', 'Устинов У.У.', 'Федоров Ф.Ф.',
            'Харитонов Х.Х.', 'Цветков Ц.Ц.', 'Чернышов Ч.Ч.', 'Широков Ш.Ш.',
            'Щербаков Щ.Щ.', 'Юдин Ю.Ю.'
        ]
    }
];

let currentSort = { column: 'code', direction: 'asc' };
let filteredData = [...groupsData];
let modalInstance = null;

document.addEventListener('DOMContentLoaded', function() {
    const modalElement = document.getElementById('groupModal');
    if (modalElement) {
        modalInstance = new bootstrap.Modal(modalElement);
    }
    

    renderTable();
    

    setupEventListeners();
});

function setupEventListeners() {
    document.getElementById('searchInput').addEventListener('input', filterData);
    document.getElementById('courseFilter').addEventListener('change', filterData);
    document.getElementById('facultyFilter').addEventListener('change', filterData);
    

    document.getElementById('exportExcelBtn').addEventListener('click', exportToExcel);
    document.getElementById('exportPdfBtn').addEventListener('click', exportToPDF);
    document.getElementById('resetFiltersBtn').addEventListener('click', resetFilters);
    

    document.querySelectorAll('.groups-table th[data-sort]').forEach(th => {
        th.addEventListener('click', () => {
            const column = th.dataset.sort;
            sortData(column);
        });
    });
    

    document.getElementById('exportGroupBtn')?.addEventListener('click', exportCurrentGroup);
}

function filterData() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const courseFilter = document.getElementById('courseFilter').value;
    const facultyFilter = document.getElementById('facultyFilter').value;
    
    filteredData = groupsData.filter(group => {
        const matchesSearch = searchTerm === '' || 
            group.code.toLowerCase().includes(searchTerm) ||
            group.name.toLowerCase().includes(searchTerm) ||
            group.curator.toLowerCase().includes(searchTerm) ||
            group.faculty.toLowerCase().includes(searchTerm);
        

        const matchesCourse = courseFilter === '' || group.course.toString() === courseFilter;
        

        const matchesFaculty = facultyFilter === '' || group.faculty === facultyFilter;
        
        return matchesSearch && matchesCourse && matchesFaculty;
    });
    

    updateActiveFilters();
    

    applySort();
    

    renderTable();
}

function updateActiveFilters() {
    const container = document.getElementById('activeFilters');
    const searchTerm = document.getElementById('searchInput').value;
    const courseFilter = document.getElementById('courseFilter');
    const facultyFilter = document.getElementById('facultyFilter');
    
    let filtersHtml = '';
    
    if (searchTerm) {
        filtersHtml += `<span class="filter-tag">Поиск: "${searchTerm}" <i class="fas fa-times" onclick="clearSearch()"></i></span>`;
    }
    
    if (courseFilter.value) {
        const courseText = courseFilter.options[courseFilter.selectedIndex].text;
        filtersHtml += `<span class="filter-tag">${courseText} <i class="fas fa-times" onclick="clearFilter('course')"></i></span>`;
    }
    
    if (facultyFilter.value) {
        filtersHtml += `<span class="filter-tag">${facultyFilter.value} <i class="fas fa-times" onclick="clearFilter('faculty')"></i></span>`;
    }
    
    container.innerHTML = filtersHtml;
}

window.clearSearch = function() {
    document.getElementById('searchInput').value = '';
    filterData();
};

window.clearFilter = function(filterType) {
    if (filterType === 'course') {
        document.getElementById('courseFilter').value = '';
    } else if (filterType === 'faculty') {
        document.getElementById('facultyFilter').value = '';
    }
    filterData();
};

function resetFilters() {
    document.getElementById('searchInput').value = '';
    document.getElementById('courseFilter').value = '';
    document.getElementById('facultyFilter').value = '';
    filteredData = [...groupsData];
    currentSort = { column: 'code', direction: 'asc' };
    renderTable();
    document.getElementById('activeFilters').innerHTML = '';
}

function sortData(column) {
    if (currentSort.column === column) {
        currentSort.direction = currentSort.direction === 'asc' ? 'desc' : 'asc';
    } else {
        currentSort.column = column;
        currentSort.direction = 'asc';
    }
    
    applySort();
    renderTable();
}

function applySort() {
    filteredData.sort((a, b) => {
        let valA = a[currentSort.column];
        let valB = b[currentSort.column];
        

        if (currentSort.column === 'course' || currentSort.column === 'studentsCount') {
            valA = Number(valA);
            valB = Number(valB);
        }
        
        if (valA < valB) return currentSort.direction === 'asc' ? -1 : 1;
        if (valA > valB) return currentSort.direction === 'asc' ? 1 : -1;
        return 0;
    });
}

function renderTable() {
    const tbody = document.getElementById('tableBody');
    const totalSpan = document.querySelector('#totalGroups span');
    const rowsInfo = document.getElementById('rowsInfo');
    

    if (totalSpan) {
        totalSpan.textContent = filteredData.length;
    }
    

    if (rowsInfo) {
        rowsInfo.innerHTML = `Показано записей: <span>${filteredData.length}</span> из <span>${groupsData.length}</span>`;
    }
    
    if (filteredData.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="6" style="text-align: center; padding: 50px;">
                    <i class="fas fa-search" style="font-size: 3rem; color: #ccc; margin-bottom: 15px;"></i>
                    <h4>Ничего не найдено</h4>
                    <p style="color: #666;">Попробуйте изменить параметры поиска</p>
                </td>
            </tr>
        `;
        return;
    }
    
    let html = '';
    filteredData.forEach(group => {
        html += `
            <tr onclick="showGroupDetails(${group.id})">
                <td><span class="group-tag">${group.code}</span></td>
                <td>${group.name}</td>
                <td>${group.course}</td>
                <td>${group.curator}</td>
                <td>${group.studentsCount}</td>
                <td>
                    <button class="action-btn" onclick="event.stopPropagation(); showGroupDetails(${group.id})" title="Просмотр деталей">
                        <i class="fas fa-eye"></i>
                    </button>
                </td>
            </tr>
        `;
    });
    
    tbody.innerHTML = html;
}

window.showGroupDetails = function(groupId) {
    const group = groupsData.find(g => g.id === groupId);
    if (!group) return;
    
    const modalBody = document.getElementById('modalBody');
    
let studentsHtml = '';
    group.students.forEach((student, index) => {
        const initials = student.split(' ').map(n => n[0]).join('');
        studentsHtml += `
            <li>
                <span class="student-avatar">${initials}</span>
                <span>${student}</span>
            </li>
        `;
    });
    
    modalBody.innerHTML = `
        <div class="row">
            <div class="col-md-6">
                <div class="group-detail-item">
                    <div class="group-detail-label">Код группы</div>
                    <div class="group-detail-value"><span class="group-tag" style="font-size: 1rem;">${group.code}</span></div>
                </div>
                <div class="group-detail-item">
                    <div class="group-detail-label">Специальность</div>
                    <div class="group-detail-value">${group.name}</div>
                </div>
                <div class="group-detail-item">
                    <div class="group-detail-label">Факультет</div>
                    <div class="group-detail-value">${group.faculty}</div>
                </div>
                <div class="group-detail-item">
                    <div class="group-detail-label">Курс</div>
                    <div class="group-detail-value">${group.course}</div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="group-detail-item">
                    <div class="group-detail-label">Классный руководитель</div>
                    <div class="group-detail-value">${group.curator}</div>
                    <div style="font-size: 0.9rem; color: #666; margin-top: 5px;">
                        <i class="fas fa-phone-alt"></i> ${group.curatorPhone}<br>
                        <i class="fas fa-envelope"></i> ${group.curatorEmail}
                    </div>
                </div>
                <div class="group-detail-item">
                    <div class="group-detail-label">Количество студентов</div>
                    <div class="group-detail-value">${group.studentsCount}</div>
                </div>
            </div>
        </div>
        <hr>
        <h6>Список студентов:</h6>
        <ul class="students-list">
            ${studentsHtml}
        </ul>
    `;
    
document.getElementById('exportGroupBtn').dataset.groupId = groupId;
    
    modalInstance.show();
};

function exportCurrentGroup() {
    const groupId = document.getElementById('exportGroupBtn').dataset.groupId;
    const group = groupsData.find(g => g.id === parseInt(groupId));
    if (!group) return;
    

    const exportData = [
        ['Параметр', 'Значение'],
        ['Код группы', group.code],
        ['Специальность', group.name],
        ['Факультет', group.faculty],
        ['Курс', group.course],
        ['Классный руководитель', group.curator],
        ['Телефон куратора', group.curatorPhone],
        ['Email куратора', group.curatorEmail],
        ['Количество студентов', group.studentsCount],
        [],
        ['Список студентов:'],
        ...group.students.map(s => [s])
    ];
    

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(exportData);
    XLSX.utils.book_append_sheet(wb, ws, group.code);
    XLSX.writeFile(wb, `group_${group.code}.xlsx`);
}

function exportToExcel() {
    const exportData = [
        ['Код группы', 'Специальность', 'Курс', 'Факультет', 'Классный руководитель', 'Кол-во студентов']
    ];
    
    filteredData.forEach(group => {
        exportData.push([
            group.code,
            group.name,
            group.course,
            group.faculty,
            group.curator,
            group.studentsCount
        ]);
    });
    
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(exportData);
    XLSX.utils.book_append_sheet(wb, ws, 'Справочник групп');
    XLSX.writeFile(wb, 'groups_list.xlsx');
}

function exportToPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    

    doc.setFontSize(16);
    doc.setTextColor(0, 48, 87);
    doc.text('Белоярский политехнический колледж', 14, 20);
    
    doc.setFontSize(14);
    doc.setTextColor(139, 0, 0);
    doc.text('Справочник учебных групп', 14, 30);
    
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text(`Дата формирования: ${new Date().toLocaleDateString('ru-RU')}`, 14, 38);
    

    const tableColumn = ['Код', 'Специальность', 'Курс', 'Факультет', 'Куратор', 'Студентов'];
    const tableRows = filteredData.map(group => [
        group.code,
        group.name,
        group.course,
        group.faculty,
        group.curator,
        group.studentsCount
    ]);
    
    doc.autoTable({
        head: [tableColumn],
        body: tableRows,
        startY: 45,
        styles: { fontSize: 8 },
        headStyles: { fillColor: [0, 48, 87] },
        alternateRowStyles: { fillColor: [240, 245, 250] }
    });
    
    doc.save('groups_list.pdf');
}

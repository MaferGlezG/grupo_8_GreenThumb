import React from 'react';
import LastProductInDb from './LastProductInDb';
import Categories from './Categories';

function ContentRowCenter() {
    return (
        <div className="row">

            {/*<!-- Last Movie in DB -->*/}
            <LastProductInDb />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <Categories />

        </div>
    )
}

export default ContentRowCenter;
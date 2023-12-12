const SkeletonLoader = () => {
    const skeletonLayout = (
        <div className="restaurant-skeleton-card">
            <div className="restaurant-skeleton-display">
                <div className="skeleton-img skeleton"></div>

                <div className="heading-1 skeleton">
                    <div className="heading-2 skeleton"></div>
                </div>

                <div className="heading-1 skeleton">
                    <div className="heading-2 skeleton"></div>
                </div>

                <div className="heading-1 skeleton">
                    <div className="heading-2 skeleton"></div>
                </div>

                <div className="heading-1 skeleton">
                    <div className="heading-2 skeleton"></div>
                </div>
            </div>
        </div>
    );

    return skeletonLayout;
};

export default SkeletonLoader;
